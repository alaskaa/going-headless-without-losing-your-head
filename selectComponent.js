import * as React from "react";

import SmallStage from "../components/SmallStage/SmallStage";
import FullSizeImageTeaser from "../components/FullSizeImageTeaser/FullSizeImageTeaser";
import Stage from "../components/Stage/Stage";
import SpecialContent from "../components/SpecialContent/SpecialContent";
import CampaignTeaser from "../components/CampaignTeaser/CampaignTeaser";
import ContentModul from "../components/ContentModul/ContentModul";
import MembershipTeaser from "../components/MembershipTeaser/MembershipTeaser";
import MembershipModule from "../components/MembershipModule/MembershipModule";
import CourseSlider from "../components/CourseSlider/CourseSlider";
import ContactForm from "../components/ContactForm/ContactForm";
import TextPage from "../components/TextPage/TextPage";
import Courseplan from "../components/CourseplanModule/CourseplanModule";

const Components = {
  "stage-small": SmallStage,
  "fullsize-teaser": FullSizeImageTeaser,
  stage: Stage,
  special: SpecialContent,
  "content-module": ContentModul,
  "membership-teaser": MembershipTeaser,
  "campaign-teaser": CampaignTeaser,
  "course-slider": CourseSlider,
  membership: MembershipModule,
  clubfinder: StudioFinderModule,
  "studio-view": Yext,
  "course-plan": Courseplan,
  contact: ContactForm,
  richtext: TextPage
};

export default function selectComponent({ module, id, ...props }, isMobile) {
  if (typeof Components[module] !== "undefined") {
    return React.createElement(Components[module], {
      key: id,
      isMobile,
      ...props
    });
  }

  console.error(`The component ${module} doesn't exist yet.`);
  return null;
}
