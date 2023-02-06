import React, { useEffect, useState } from "react";
import { AppIcon, ComingSoon, Container, Divider, GetOnAppStoreBadge, GridContainer, GridEmoji, GridItem, H1, HeaderContainer, MiniTitle, P, QRCodeElement, Viewport } from "./InfoBox.styles";
import { getNormalized, lerp } from "../../Utilities/Math";

import appIconImage from "../../Assets/AppIcon.png"
import appStoreBadge from "../../Assets/DownloadOnAppStoreBadge.svg"
import qrCodeSVG from "../../Assets/AppStoreQRCode.svg"

const InfoBox = () => {
  const IS_APP_LIVE = false
  let [minWidth, maxWidth] = [225, 400]
  const [width, setWidth] = useState(maxWidth);

  let [minRightMargin, maxRightMargin] = [-2, 1.5]
  const [rightMargin, setRightMargin] = useState(maxRightMargin)

  let [minLeftMargin, maxLeftMargin] = [-5, 2]
  const [leftMargin, setLeftMargin] = useState(maxLeftMargin)

  useEffect(() => {
    const handleResize = () => {
      setWidth(lerp(minWidth, maxWidth, getNormalized(400, 1250, window.innerWidth)))
      setLeftMargin(lerp(minLeftMargin, maxLeftMargin, getNormalized(400, 1250, window.innerWidth)))
      setRightMargin(lerp(minRightMargin, maxRightMargin, getNormalized(400, 1250, window.innerWidth)))
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [maxLeftMargin, maxRightMargin, maxWidth, minLeftMargin, minRightMargin, minWidth])

  return (
    <Container
      width={width}
      leftMargin={leftMargin}
      rightMargin={rightMargin}
    >
      <Viewport>
        <HeaderContainer>
          <AppIcon src={appIconImage} />
          <H1>Cash Counts</H1>
        </HeaderContainer>

        <P>{"Say goodbye to manual counting and hello to precision with Cash Counts. This app makes it easy to track your coins, bills, and checks with a breakdown of the grand total on any screen. Ideal for tilling in and out registers and counting safes."}</P>

        <Divider />

        <GridContainer>
          {[
            ["\u{1F1FA}\u{1F1F8}", " USD"],
            ["\u{1F1EA}\u{1F1FA}", " EUR"],
            ["\u{1F1EC}\u{1F1E7}", " GBP"],
            ["\u{1F1E8}\u{1F1E6}", " CAD"],
          ].map((item, id) =>
            <GridItem key={id}>
              <GridEmoji>{item[0]}</GridEmoji>
              {item[1]}
            </GridItem>
          )}
        </GridContainer>

        {IS_APP_LIVE &&
          <QRCodeElement src={qrCodeSVG} />
        }

        {IS_APP_LIVE &&
          <a href="www.google.com">
            <GetOnAppStoreBadge src={appStoreBadge} />
          </a>
        }

        {!IS_APP_LIVE &&
          <ComingSoon>Coming soon</ComingSoon>
        }

      </Viewport>
    </Container>
  );
};

export default InfoBox;