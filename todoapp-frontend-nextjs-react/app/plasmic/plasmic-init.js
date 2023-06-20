import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "5BwtKaPW69DtLKD2yetQK2", // ID of a project you are using
      token:
        "CoqSOJEX5hgp7t7q8zImVAnkGaEgDg1CkpsBVhma14TyRkZiJbRENsGAzQiRFoK1w8Fzl2w5LYGNB1bg", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
