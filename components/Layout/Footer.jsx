import React from "react";
import { siteMeta } from "../../constants/config";
import FlexRow, { Column } from "./FlexRow";
import { useOnlineStatus } from "@hooks/useOnlineStatus";
import { siteFooter, colHeader, copyright } from "./Footer.module.scss";

const Footer = () => {
  const isOnline = useOnlineStatus();
  return (
    <>
      <FlexRow customClass={siteFooter}>
        <Column>
          <p className={colHeader}>{siteMeta.name}</p>
          <p>
            Our store contains a variety of books, including novels, comics, and children's books. We are committed to
            providing the best quality products and services to our customers.
          </p>
        </Column>
        <Column>
          <p className={colHeader}>Our services</p>
          <div>Buying & Borrowing</div>
          <div>Reading events</div>
          <div>Book clubs, discussions and reviews</div>
          <div>Donating & charity</div>
        </Column>
        <Column>
          <p className={colHeader}>Contact us</p>
          <div>
            <i className="fa fa-building" aria-hidden="true"></i> {siteMeta.company}
          </div>
          <div>
            <i className="fa fa-map-marker" aria-hidden="true"></i> {siteMeta.address}
          </div>
          <div>
            <i className="fa fa-phone" aria-hidden="true"></i> <a href={`tel:${siteMeta.phone}`}>{siteMeta.phone}</a>
          </div>
          <div title={isOnline ? "You're online, not us!" : "You're offline, not us!"} style={{ cursor: "pointer" }}>
            {isOnline ? "✅ Online" : "❌ Disconnected"}
          </div>
        </Column>
      </FlexRow>
      <div className={copyright}>
        Copyright © {new Date().getFullYear()}, <span style={{ fontWeight: "bold" }}>{siteMeta.name}</span>
      </div>
    </>
  );
};

export default Footer;
