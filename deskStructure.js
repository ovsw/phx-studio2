import React from "react";

import S from "@sanity/desk-tool/structure-builder";
import {
  MdSettings,
  MdPerson,
  MdFolder,
  MdBook,
  MdList,
  MdStar,
  MdArrowForward,
  MdEdit,
  MdVisibility,
} from "react-icons/md";

const hiddenDocTypes = (listItem) =>
  !["category", "author", "post", "siteSettings"].includes(listItem.getId());

const url = "https://preview-phxhomeloan.gtsb.io/";

const WebPreview = ({ document }) => {
  const { displayed } = document;
  const slug = displayed.slug?.current;

  if (!slug) {
    //  home page has no slug - special affordance
    if (displayed._type == "siteHome") {
      return (
        <iframe
          src={`https://preview-phxhomeloan.gtsb.io/`}
          frameBorder={0}
          width="100%"
          height="100%"
        />
      );
    }
    // ask for a slug
    return <h1>Please set a slug to see a preview</h1>;
  }

  // get url path prefix for each content type
  const pathPrefixes = {
    page: "",
    post: "",
    pageSupport: "",
    pageSimple: "",
  };
  const pathPrefix = pathPrefixes[displayed._type];

  const targetURL = url + pathPrefix + slug;
  return <iframe src={targetURL} frameBorder={0} width="100%" height="100%" />;
};

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Only show the iframe for documents for which a preview makes sense.
  if (
    schemaType === "page" ||
    schemaType === "siteHome" ||
    schemaType === "post"
  ) {
    return S.document().views([
      // default form
      S.view.form().icon(MdEdit),
      // custom preview component we built above
      S.view.component(WebPreview).title("Web Preview").icon(MdVisibility),
    ]);
  }
};

export default () =>
  S.list()
    .title("Website Content")
    .items([
      S.listItem()
        .title("Settings")
        .icon(MdSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.documentListItem()
                .id("apply")
                .title("Apply")
                .schemaType("page"),
              S.documentListItem()
                .id("mystory")
                .title("My Story")
                .schemaType("page"),
              // S.documentListItem()
              //   .id('loanInformation')
              //   .title('Loan Information')
              //   .schemaType('page'),
              S.listItem()
                .title("Loan Info Pages")
                .icon(MdFolder)
                .child(
                  S.list()
                    .title("Loan Info Pages")
                    .items([
                      S.documentListItem()
                        .id("loanOptions")
                        .title("Loan Options")
                        .schemaType("page"),
                      S.documentListItem()
                        .id("refinancing")
                        .title("Refinancing")
                        .schemaType("page"),
                      S.documentListItem()
                        .id("whatIsMortgageInsurance")
                        .title("What Is Mortgage Insurance")
                        .schemaType("page"),
                    ])
                ),
              // S.documentListItem()
              //   .id('typesOfLoans')
              //   .title('Types of Loans')
              //   .schemaType('page'),
              S.listItem()
                .title("Types of Loans Pages")
                .child(
                  S.list()
                    .title("Types of Loans Pages")
                    .items([
                      S.documentListItem()
                        .id("adjustableRateMortgage")
                        .title("Adjustable Rate Mortgage")
                        .schemaType("page"),
                      S.documentListItem()
                        .id("convenionalLoan")
                        .title("Conventional Loan")
                        .schemaType("page"),
                      S.documentListItem()
                        .id("fhaLoan")
                        .title("FHA Loan")
                        .schemaType("page"),
                      S.documentListItem()
                        .id("jumboLoan")
                        .title("Jumbo Loan")
                        .schemaType("page"),
                      S.documentListItem()
                        .id("usdaLoan")
                        .title("USDA Loan")
                        .schemaType("page"),
                      S.documentListItem()
                        .id("vaLoan")
                        .title("VA Loan")
                        .schemaType("page"),
                      S.documentListItem()
                        .id("c2pLoan")
                        .title("C2P Loan")
                        .schemaType("page"),
                    ])
                )
                .icon(MdFolder),
              S.documentListItem()
                .id("media")
                .title("Media")
                .schemaType("page"),
              S.documentListItem()
                .id("loanCalculator")
                .title("Loan Calculator")
                .schemaType("page"),
              S.documentListItem()
                .id("houseEstimator")
                .title("House Estimator")
                .schemaType("page"),
              S.documentListItem()
                .id("contactMe")
                .title("Contact")
                .schemaType("page"),
              S.documentListItem()
                .id("award")
                .title("Award Page")
                .schemaType("page"),
              S.documentListItem()
                .id("buyersGuideSpring2021")
                .title("Spring 2021 Buyer's Guide")
                .schemaType("page"),
            ])
        ),
      S.divider(),
      S.listItem()
        .icon(MdBook)
        .title("Blog posts")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Blog posts")),
      S.listItem()
        .icon(MdList)
        .title("Blog Posts by Category")
        .child(
          S.documentList()
            .title("Categories")
            .menuItems(S.documentTypeList("category").getMenuItems())
            .filter("_type == $type")
            .params({ type: "category" })
            .child((categoryId) =>
              S.documentList()
                .title("Posts")
                .menuItems(S.documentTypeList("post").getMenuItems())
                .filter("_type == $type && $categoryId in categories[]._ref")
                .params({ type: "post", categoryId })
            )
        ),
      S.listItem()
        .title("Categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categories")),
      S.listItem()
        .title("Authors")
        .icon(MdPerson)
        .schemaType("author")
        .child(S.documentTypeList("author").title("Authors")),
      S.listItem()
        .title("Team")
        .icon(MdPerson)
        .schemaType("person")
        .child(S.documentTypeList("person").title("Team Members")),
      S.documentListItem()
        .title("Redirects")
        .id("redirects")
        .icon(MdArrowForward)
        .schemaType("redirects"),
      // S.listItem()
      //   .title('HP Reviews Widget')
      //   .icon(MdStar)
      //   .child(
      //     S.editor()
      //       .id('reviewsWidget')
      //       .schemaType('reviewsWidget')
      //       .documentId('reviewsWidget')
      //   )
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      // ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
