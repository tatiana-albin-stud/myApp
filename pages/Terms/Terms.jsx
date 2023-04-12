import React, { useEffect, useState } from "react";
import { PageLayout } from "lib";
import AddTC from "./AddTC";
import { PrimaryButton } from "lib/components/Buttons/buttons";
import AcUnitIcon from "@mui/icons-material/AddCircleOutline";
import ShowTC from "./ShowTC";
import styles from "./Stilizare.module.scss";
import { ProposedAPI } from "api_inbusiness/index.js";

const Terms = () => {
  const [openAdd, setOpenAdd] = useState(false);
  return (
    <PageLayout
      title="Terms & Conditions"
      //subTitle="Subtitle"
      backArrow={true}
      actionArea={
        <>
          <PrimaryButton
            startIcon={<AcUnitIcon />}
            onClick={() => setOpenAdd(true)}
          >
            Adauga
          </PrimaryButton>
        </>
      }
    >
      <ShowTC />
      <AddTC open={openAdd} setOpen={setOpenAdd} />
    </PageLayout>
  );
};

export default Terms;
