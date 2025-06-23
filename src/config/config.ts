import { GITHUB_ORG_NAME } from '../constants'

export const getReopsURL = () => {
    // return `https://api.github.com/orgs/${GITHUB_ORG_NAME}/repos`
    return `https://api.github.com/orgs/apache/repos`
}

export const getConstributorsURL = (repoName: string) => {
    return `https://api.github.com/repos/apache/${repoName}/contributors`
}