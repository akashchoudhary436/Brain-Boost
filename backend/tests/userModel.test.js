// Mock mongoose and bcrypt before requiring the model to handle environment restrictions
jest.mock("mongoose", () => {
  const m = {
    Schema: jest.fn().mockImplementation(() => ({
      methods: {},
      pre: jest.fn(),
    })),
    model: jest.fn().mockImplementation((name, schema) => {
      // Mock model constructor that assigns properties and methods from the schema
      const Model = function (data) {
        Object.assign(this, data);
      };
      Model.schema = schema;
      Model.prototype.matchPassword = schema.methods.matchPassword;
      return Model;
    }),
  };
  // Add common Schema types to make the mock more robust
  m.Schema.Types = {
    ObjectId: String,
    String: String,
    Number: Number,
    Boolean: Boolean,
  };
  return m;
}, { virtual: true });

jest.mock("bcrypt", () => ({
  compare: jest.fn(),
  genSalt: jest.fn(),
  hash: jest.fn(),
}), { virtual: true });

const User = require("../models/userModel");
const bcrypt = require("bcrypt");

describe("User Model - matchPassword", () => {
  let user;

  beforeEach(() => {
    // Create a new user instance for each test
    user = new User({
      name: "Test User",
      email: "test@example.com",
      password: "hashedPassword",
    });
    jest.clearAllMocks();
  });

  it("should return true if passwords match", async () => {
    // Arrange: Mock bcrypt.compare to return true
    const plainPassword = "correctPassword";
    bcrypt.compare.mockResolvedValue(true);

    // Act
    const result = await user.matchPassword(plainPassword);

    // Assert
    expect(result).toBe(true);
    expect(bcrypt.compare).toHaveBeenCalledWith(plainPassword, "hashedPassword");
  });

  it("should return false if passwords do not match", async () => {
    // Arrange: Mock bcrypt.compare to return false
    const wrongPassword = "wrongPassword";
    bcrypt.compare.mockResolvedValue(false);

    // Act
    const result = await user.matchPassword(wrongPassword);

    // Assert
    expect(result).toBe(false);
    expect(bcrypt.compare).toHaveBeenCalledWith(wrongPassword, "hashedPassword");
  });
});
