import { ReactNode } from "react";
import { ContentfulClient, ContentfulProvider } from "react-contentful";

const contentfulClient = new ContentfulClient({
  accessToken: "muPYGj2Owz5K_JLsoL0sabeHDyLwtCk3P6UBXAHn068",
  space: "s7bsoy8h4huv",
});

export function ContentfulProv({ children }: { children: ReactNode }) {
  return (
    <>
      <ContentfulProvider client={contentfulClient}>
        {children}
      </ContentfulProvider>
    </>
  );
}
