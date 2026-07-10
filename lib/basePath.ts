export const basePath = process.env.GITHUB_PAGES === "true" ? "/checkwebstudios-website" : "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
