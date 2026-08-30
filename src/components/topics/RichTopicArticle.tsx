import React from "react";
import { Topic1_1_SpeedVelocityAcceleration } from "./Topic1_1_SpeedVelocityAcceleration";
import { Topic1_2_MotionGraphs } from "./Topic1_2_MotionGraphs";
import { Topic1_3_NewtonsLaws } from "./Topic1_3_NewtonsLaws";
import { Topic1_4_ForcesMassWeight } from "./Topic1_4_ForcesMassWeight";
import { Topic1_5_ResultantForcesFreeBody } from "./Topic1_5_ResultantForcesFreeBody";
import { Topic1_6_MomentsEquilibrium } from "./Topic1_6_MomentsEquilibrium";
import { Topic1_7_MomentumConservation } from "./Topic1_7_MomentumConservation";
import { Topic1_8_WorkEnergyPower } from "./Topic1_8_WorkEnergyPower";

interface RichTopicArticleProps {
  topicId: string;
}

export const RichTopicArticle: React.FC<RichTopicArticleProps> = ({ topicId }) => {
  switch (topicId) {
    case "1.1":
      return <Topic1_1_SpeedVelocityAcceleration />;
    case "1.2":
      return <Topic1_2_MotionGraphs />;
    case "1.3":
      return <Topic1_3_NewtonsLaws />;
    case "1.4":
      return <Topic1_4_ForcesMassWeight />;
    case "1.5":
      return <Topic1_5_ResultantForcesFreeBody />;
    case "1.6":
      return <Topic1_6_MomentsEquilibrium />;
    case "1.7":
      return <Topic1_7_MomentumConservation />;
    case "1.8":
      return <Topic1_8_WorkEnergyPower />;
    default:
      return null;
  }
};
