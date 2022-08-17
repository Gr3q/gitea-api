/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AnnotatedTagObject } from './AnnotatedTagObject';
import type { CommitUser } from './CommitUser';
import type { PayloadCommitVerification } from './PayloadCommitVerification';

/**
 * AnnotatedTag represents an annotated tag
 */
export type AnnotatedTag = {
    message?: string;
    object?: AnnotatedTagObject;
    sha?: string;
    tag?: string;
    tagger?: CommitUser;
    url?: string;
    verification?: PayloadCommitVerification;
};

