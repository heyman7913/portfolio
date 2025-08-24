import type { Photo, LabelledValue, LinkButton, Section, Tag, DownloadButton } from '../shared';

export interface MainSection extends Section {
  /**
   * Your image.
   *
   * **Ratio**: 1:1
   *
   * **Display size**: 208x208px
   */
  image: Photo;

  /**
   * Your name.
   */
  fullName: string;

  /**
   * Your current role.
   */
  role: string;

  /**
   * Label-value pairs with some key details about you.
   *
   * E.g. phone, email, location, expected salary.
   */
  details: LabelledValue[];

  /**
   * A short overview of you and your experience.
   */
  description: string;

  /**
   * [WEB] Any information that you want to highlight.
   */
  tags: Tag[];

  /**
   * [WEB] Your social media profiles.
   */
  links: LinkButton[];

  action: DownloadButton;
}
