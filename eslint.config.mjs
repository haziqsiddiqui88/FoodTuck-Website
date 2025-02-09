import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",  //  Block any completely
      "@typescript-eslint/no-unused-vars": "warn",    // Warn on unused variables
      "react-hooks/exhaustive-deps": "warn",          // Warn if useEffect dependencies are wrong
    },
  },
];

export default eslintConfig;
