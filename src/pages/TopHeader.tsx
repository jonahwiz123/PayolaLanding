import { FunctionComponent } from "react";
import styles from "./TopHeader.module.css";
const TopHeader: FunctionComponent = () => {
  return (
    <div className={styles.topHeader}>
      <div className={styles.navBar}>
        <div className={styles.locouiLogo}>
          <img
            className={styles.locouiLogoIcon}
            alt=""
            src="/locouilogo1.svg"
          />
          <div className={styles.locouiParent}>
            <img className={styles.locouiIcon} alt="" src="/locoui1.svg" />
            <div className={styles.byTeamLocofy}>Payola</div>
          </div>
        </div>
        <div className={styles.navigationRight}>
          <div className={styles.accountSection}>
            <img
              className={styles.hamburgerMenuIcon}
              alt=""
              src="/notification.svg"
            />
            <img
              className={styles.notificationBellIcon}
              alt=""
              src="/notification1.svg"
            />
            <img
              className={styles.profilePictureIcon}
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
          <nav className={styles.navigationMenu}>
            <button className={styles.button}>
              <div className={styles.button1}>Learn More</div>
            </button>
            <button className={styles.button2}>
              <div className={styles.button3}>Resources</div>
            </button>
            <button className={styles.button4}>
              <div className={styles.button5}>
                <p
                  className={styles.affiliatePrograms}
                >{`Affiliate Programs `}</p>
                <p className={styles.affiliatePrograms}>{`& Sponsorships`}</p>
              </div>
            </button>
            <button className={styles.button2}>
              <div className={styles.button3}>Coming Soon...</div>
            </button>
          </nav>
        </div>
      </div>
      <section className={styles.landingHero}>
        <img
          className={styles.landingHeroChild}
          alt=""
          src="/rectangle-1@2x.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.theEasiestWayToGenerateInParent}>
              <h1 className={styles.theEasiestWay}>
                The Easiest Way To Generate Income From Your Content
              </h1>
              <div className={styles.joinPayolaTodayContainer}>
                <p className={styles.affiliatePrograms}>
                  <span className={styles.join}>{`Join `}</span>
                  <b className={styles.join}>Payola</b>
                  <span
                    className={styles.join}
                  >{` today and discover the easiest way to connect with brands and sponsors who match your niche and style. `}</span>
                </p>
                <p className={styles.affiliatePrograms}>
                  <span className={styles.join}>&nbsp;</span>
                </p>
                <p className={styles.affiliatePrograms}>
                  <span
                    className={styles.join}
                  >{`Whether you are an online creator with a `}</span>
                  <span className={styles.hundredOrAMillion}>
                    <i className={styles.join}>hundred</i>
                    <span className={styles.join}>{` or a `}</span>
                    <i className={styles.join}>million</i>
                  </span>
                  <span
                    className={styles.join}
                  >{` followers; Earn more money, grow your audience, and build your brand with `}</span>
                  <b className={styles.join}>Payola</b>
                  <span className={styles.join}>. </span>
                </p>
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <button className={styles.button8}>
                <b className={styles.button9}>Join For Free!</b>
              </button>
              <button className={styles.button10}>
                <div className={styles.button11}>Explore For Now</div>
              </button>
            </div>
          </div>
          <div className={styles.blob1} />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
        </div>
      </section>
      <div className={styles.featureSection}>
        <div className={styles.simpleAndCleanUisParent}>
          <b className={styles.simpleAndClean}>Why Payola?</b>
          <div className={styles.powerfulYetCleanContainer}>
            <p className={styles.features}>Features</p>
            <p className={styles.affiliatePrograms}>That Make Us Special</p>
          </div>
        </div>
        <div className={styles.features1}>
          <div className={styles.icbaselineRocketParent}>
            <img
              className={styles.icbaselineRocketIcon}
              alt=""
              src="/icbaselinerocket.svg"
            />
            <div className={styles.optimizedForPerformanceContainer}>
              <p className={styles.affiliatePrograms}>{`Grow Your Network `}</p>
              <p className={styles.affiliatePrograms}>
                By Working With The Largest Brands
              </p>
            </div>
          </div>
          <div className={styles.icbaselineRocketGroup}>
            <img
              className={styles.icbaselineRocketIcon}
              alt=""
              src="/icbaselinerocket1.svg"
            />
            <div
              className={styles.optimizedForPerformanceContainer}
            >{`Save Time By Quickly Filtering & Browsing Through Hundreds of Affiliate Programs and Brand Sponsors`}</div>
          </div>
          <div className={styles.icbaselineRocketParent}>
            <img
              className={styles.icbaselineRocketIcon}
              alt=""
              src="/icbaselinerocket2.svg"
            />
            <div className={styles.optimizedForPerformanceContainer}>
              Earn More Through Transparent and Intuitive Performance Trackers
            </div>
          </div>
          <div className={styles.icbaselineRocketParent}>
            <img
              className={styles.icbaselineRocketIcon}
              alt=""
              src="/icbaselinerocket3.svg"
            />
            <div className={styles.optimizedForPerformanceContainer}>
              Join A Community Dedicated To Helping Everyone To Free Themselves
              From The Moden Industrial Workforce
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contentSection}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-478@2x.png"
          />
          <div className={styles.frameContainer}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.designToCodeParent}>
                  <div className={styles.designToCode}>Design to code</div>
                  <div className={styles.minReadWrapper}>
                    <div className={styles.byTeamLocofy}>3 min read</div>
                  </div>
                </div>
                <b className={styles.locofyaiTurn}>
                  Locofy.ai – Turn Figma to Code!
                </b>
              </div>
              <div className={styles.goFromFigmaToCodeInMinimWrapper}>
                <div className={styles.goFromFigma}>
                  Go from Figma to code in minimum amount of time using Locofy.
                  Take your..
                </div>
              </div>
            </div>
            <div className={styles.lineParent}>
              <div className={styles.frameItem} />
              <div className={styles.articleAuthor}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar@2x.png"
                />
                <div className={styles.authorText}>
                  <div className={styles.annaRos}>Anna Rosé</div>
                  <div className={styles.postedJustNow}>Posted just now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-4781@2x.png"
          />
          <div className={styles.frameParent3}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.designToCodeGroup}>
                  <div className={styles.designToCode}>Design to code</div>
                  <div className={styles.minReadContainer}>
                    <div className={styles.byTeamLocofy}>2 min read</div>
                  </div>
                </div>
                <b className={styles.locofyaiTurn}>Figma for Developers</b>
              </div>
              <div className={styles.goFromFigmaToCodeInMinimWrapper}>
                <div className={styles.goFromFigma}>
                  Developers often believe they will be off to a flying start if
                  they skip the designing process and jump directly to code.
                </div>
              </div>
            </div>
            <div className={styles.lineGroup}>
              <div className={styles.lineDiv} />
              <div className={styles.articleAuthor}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar1@2x.png"
                />
                <div className={styles.authorText}>
                  <div className={styles.annaRos}>Justin Chen</div>
                  <div className={styles.postedJustNow}>
                    Posted on Sep 6, 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-4782@2x.png"
          />
          <div className={styles.frameContainer}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.designToCodeGroup}>
                  <div className={styles.designToCode}>Integrations</div>
                  <div className={styles.minReadContainer}>
                    <div className={styles.byTeamLocofy}>2 min read</div>
                  </div>
                </div>
                <b className={styles.locofyaiTurn}>
                  Best UI library to use in Figma
                </b>
              </div>
              <div className={styles.goFromFigmaToCodeInMinimWrapper}>
                <div className={styles.goFromFigma}>
                  Find out what UI library suit your product the most. From
                  Material UI, Bootstrap, ...
                </div>
              </div>
            </div>
            <div className={styles.lineGroup}>
              <div className={styles.frameChild1} />
              <div className={styles.articleAuthor}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar2@2x.png"
                />
                <div className={styles.authorText}>
                  <div className={styles.annaRos}>Isaac Tan</div>
                  <div className={styles.postedJustNow}>
                    Posted on Sep 5, 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
