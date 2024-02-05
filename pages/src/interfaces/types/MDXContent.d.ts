type MDXContent = {
  cwd: string;
  data: Record<string, unknown>;
  history: Array<unknown>;
  messages: Array<string>;
  value: string;
};

export default MDXContent;
