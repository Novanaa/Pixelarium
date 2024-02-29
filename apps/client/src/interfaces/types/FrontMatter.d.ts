export default interface FrontMatter {
  title: string;
  description: string;
  next: Next;
}

interface Next {
  title: string;
  link: string;
}
