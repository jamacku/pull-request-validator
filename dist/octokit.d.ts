import { Octokit } from '@octokit/core';
declare const CustomOctokit: typeof Octokit & import("@octokit/core/dist-types/types").Constructor<import("@probot/octokit-plugin-config").API & {
    paginate: import("@octokit/plugin-paginate-rest").PaginateInterface;
}>;
export type CustomOctokit = InstanceType<typeof CustomOctokit>;
export declare function getOctokit(token: string): Octokit & import("@probot/octokit-plugin-config").API & {
    paginate: import("@octokit/plugin-paginate-rest").PaginateInterface;
};
export {};
