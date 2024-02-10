export default interface QueryParams {
  tabActive: "upload" | "gallery" | "albums";
  session: string;
  type: "failed" | "success";
}
