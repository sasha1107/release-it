import type { Config } from "release-it";

export default {
  git: {
    commitMessage: "chore: release v${version}",
  },
  github: {
    release: true,
  },
  plugins: {
    "@release-it/conventional-changelog": {
      preset: {
        name: "conventional-changelog-angular",
      },
    },
  },
} satisfies Config;
