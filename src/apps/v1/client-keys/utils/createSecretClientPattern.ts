export default function createSecretClientPattern({
  name,
  token,
}: {
  name: string;
  token: string;
}): string {
  const clientSecretPattern: string = `${name}.${token}`;

  return clientSecretPattern;
}
