type ErrorOptions = {
  mechanism?: string;
  severity?: "error" | "warning" | "info";
};

export function reportError(
  error: unknown,
  context: Record<string, unknown> = {},
  options: ErrorOptions = {},
) {
  console.error("Application error:", {
    error,
    context,
    options,
  });
}