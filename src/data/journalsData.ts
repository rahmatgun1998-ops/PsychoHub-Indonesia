import { JournalArticle } from "../types";
import { JOURNALS_CLINIS } from "./journalsCatalogClinis";
import { JOURNALS_DEV } from "./journalsCatalogDev";
import { JOURNALS_SOCIAL } from "./journalsCatalogSocial";
import { JOURNALS_EDU } from "./journalsCatalogEdu";
import { JOURNALS_IO } from "./journalsCatalogIO";
import { JOURNALS_GENERAL } from "./journalsCatalogGeneral";

const RAW_JOURNALS: JournalArticle[] = [
  ...JOURNALS_CLINIS,
  ...JOURNALS_DEV,
  ...JOURNALS_SOCIAL,
  ...JOURNALS_EDU,
  ...JOURNALS_IO,
  ...JOURNALS_GENERAL
];

export const JOURNALS_DATA: JournalArticle[] = RAW_JOURNALS.map((article) => ({
  ...article,
  openAccessUrl: article.openAccessUrl.startsWith('http://')
    ? `https://doi.org/${article.doi}`
    : article.openAccessUrl
}));
