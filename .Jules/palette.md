## 2024-05-23 - Jest Resolution with Pnpm and Chakra UI
**Learning:** `react-scripts` v5 + `pnpm` causes Jest resolution issues for deep imports in `@chakra-ui/react` (specifically `@chakra-ui/utils/context`).
**Action:** Use Playwright for verification instead of relying on `react-scripts test` in this environment, or investigate `transformIgnorePatterns` workarounds if unit tests are mandatory.
