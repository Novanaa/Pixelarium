export default interface FrontMatter {
  title: string;
  description: string;
  content: Array<string>;
  slug: Array<string>;
  next: Next;
}

interface Next {
  title: string;
  link: string;
}
