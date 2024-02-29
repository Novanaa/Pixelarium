interface TocElementData {
  type: string;
  tagName: string;
  properties: {
    id: string;
  };
  children: Array<ChildElement>;
  position: {
    start: {
      line: number;
      column: number;
    };
    end: {
      line: number;
      column: number;
    };
  };
  title: string;
}

interface ChildElement {
  type: string;
  tagName?: string;
  properties?: Record<string, string>;
  children?: Element[];
  value?: string;
  position?: Record<string, string>;
}

export default TocElementData;
