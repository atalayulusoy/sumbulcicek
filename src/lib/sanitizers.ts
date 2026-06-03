import sanitizeHtml from "sanitize-html";

export function sanitizeText(value: string | null | undefined) {
  return sanitizeHtml(value ?? "", {
    allowedTags: [],
    allowedAttributes: {},
  }).trim();
}
