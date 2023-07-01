import React from "react";
import { ObjectOther } from "../../components/ObjectOther";
import { ObjectOtherWrapper } from "../../components/ObjectOtherWrapper";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <p className="packages-from-any">
                  Packages From
                  <br />
                  any Source
                  <br />
                  any Repository <br />
                  in One Place.
                </p>
                <p className="text-wrapper">
                  Discover open source packages for zArchitecture/s390x on any Z
                  operating system in one place.
                </p>
              </div>
            </div>
          </div>
          <div className="group-2">
            <div className="group-3">
              <img
                className="image"
                alt="Image"
                src="https://generation-sessions.s3.amazonaws.com/c9991b567df7e3e77317c494bf64bda7/img/image-11-1@2x.png"
              />
              <div className="div-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-2">Search Packages</div>
                  <div className="union">
                    <img
                      className="union-2"
                      alt="Union"
                      src="https://generation-sessions.s3.amazonaws.com/c9991b567df7e3e77317c494bf64bda7/img/union-1.svg"
                    />
                  </div>
                  <div className="overlap-2">
                    <div className="text-wrapper-3">Search</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar">
              <div className="text-wrapper-4">about</div>
              <div className="text-wrapper-5">blog</div>
              <div className="text-wrapper-6">contact</div>
              <div className="text-wrapper-7">documentation</div>
              <img
                className="image-2"
                alt="Image"
                src="https://generation-sessions.s3.amazonaws.com/c9991b567df7e3e77317c494bf64bda7/img/image-12@2x.png"
              />
            </div>
          </div>
          <div className="group-4">
            <div className="group-5">
              <p className="find-right-packages">
                Find right packages for your system <br />
                with Open Mainframe’s powerful
                <br />
                search utility.
              </p>
              <h1 className="power-your-search">
                Power Your <br />
                search
                <br />
                one Click <br />
                at A Time
              </h1>
            </div>
            <ObjectOther className="object-other-07" />
          </div>
          <ObjectOtherWrapper className="object-other-12" />
        </div>
        <div className="overlap-3">
          <div className="group-6">
            <img
              className="element-fedora-logo"
              alt="Element fedora logo"
              src="https://generation-sessions.s3.amazonaws.com/c9991b567df7e3e77317c494bf64bda7/img/267px-fedora-logo-1@2x.png"
            />
            <img
              className="debian-logo"
              alt="Debian logo"
              src="https://generation-sessions.s3.amazonaws.com/c9991b567df7e3e77317c494bf64bda7/img/debian-logo-1@2x.png"
            />
            <img
              className="opensuse-logo"
              alt="Opensuse logo"
              src="https://generation-sessions.s3.amazonaws.com/c9991b567df7e3e77317c494bf64bda7/img/opensuse-logo-1@2x.png"
            />
            <img
              className="ubuntu-logo"
              alt="Ubuntu logo"
              src="https://generation-sessions.s3.amazonaws.com/c9991b567df7e3e77317c494bf64bda7/img/ubuntu-logo-2022-1@2x.png"
            />
            <div className="overlap-4">
              <img
                className="rocky-linux-logo"
                alt="Rocky linux logo"
                src="https://generation-sessions.s3.amazonaws.com/c9991b567df7e3e77317c494bf64bda7/img/rocky-linux-logo-1@2x.png"
              />
              <img
                className="IBM-z-OS"
                alt="Ibm z OS"
                src="https://generation-sessions.s3.amazonaws.com/c9991b567df7e3e77317c494bf64bda7/img/ibm-z-os-1@2x.png"
              />
              <img
                className="red-hat-logo"
                alt="Red hat logo"
                src="https://generation-sessions.s3.amazonaws.com/c9991b567df7e3e77317c494bf64bda7/img/red-hat-logo-1@2x.png"
              />
            </div>
            <img
              className="logo"
              alt="Logo"
              src="https://generation-sessions.s3.amazonaws.com/c9991b567df7e3e77317c494bf64bda7/img/logo-1@2x.png"
            />
            <img
              className="almalinux-icon-logo"
              alt="Almalinux icon logo"
              src="https://generation-sessions.s3.amazonaws.com/c9991b567df7e3e77317c494bf64bda7/img/almalinux-icon-logo-1@2x.png"
            />
            <div className="supported-for">SUPPORTED FOR</div>
          </div>
          <div className="group-7">
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://generation-sessions.s3.amazonaws.com/c9991b567df7e3e77317c494bf64bda7/img/rectangle-24.png"
            />
            <p className="matches-developers">
              Matches Developers With The Best Open Source Software That Meets
              Their Needs.
            </p>
            <img
              className="openmainframeproject"
              alt="Openmainframeproject"
              src="https://generation-sessions.s3.amazonaws.com/c9991b567df7e3e77317c494bf64bda7/img/openmainframeproject-color-1.png"
            />
          </div>
        </div>
        {/* <div className="overlap-wrapper">
          <div className="overlap-5">
            <div className="group-8">
              <div className="overlap-group-3">
                <p className="terms-policies">
                  <span className="span">
                    Terms &amp; Policies
                    <br />
                  </span>
                  <a href="https://www.npmjs.com/policies/" rel="noopener noreferrer" target="_blank">
                    <span className="text-wrapper-8">
                      Policies
                      <br />
                    </span>
                  </a>
                  <a href="https://www.npmjs.com/policies/terms" rel="noopener noreferrer" target="_blank">
                    <span className="text-wrapper-8">
                      Terms of Use
                      <br />
                    </span>
                  </a>
                  <a href="https://www.npmjs.com/policies/conduct" rel="noopener noreferrer" target="_blank">
                    <span className="text-wrapper-8">
                      Code of Conduct
                      <br />
                    </span>
                  </a>
                  <a href="https://www.npmjs.com/policies/privacy" rel="noopener noreferrer" target="_blank">
                    <span className="text-wrapper-8">Privacy</span>
                  </a>
                </p>
                <div className="text-wrapper-9">join our newsletter</div>
                <div className="company-about-blog">
                  <span className="text-wrapper-10">
                    Company
                    <br />
                  </span>
                  <a href="https://www.npmjs.com/about" rel="noopener noreferrer" target="_blank">
                    <span className="text-wrapper-8">
                      About
                      <br />
                    </span>
                  </a>
                  <a href="https://github.blog/tag/npm/" rel="noopener noreferrer" target="_blank">
                    <span className="text-wrapper-8">
                      Blog
                      <br />
                    </span>
                  </a>
                  <a href="https://www.npmjs.com/press" rel="noopener noreferrer" target="_blank">
                    <span className="text-wrapper-8">Press</span>
                  </a>
                </div>
                <div className="contact-email">
                  Contact
                  <br />
                  Email
                  <br />
                  LinkedIn
                  <br />
                  Instagram
                  <br />
                  Twitter
                </div>
                <div className="text-wrapper-11">Email Address</div>
                <img
                  className="image-3"
                  alt="Image"
                  src="https://generation-sessions.s3.amazonaws.com/c9991b567df7e3e77317c494bf64bda7/img/image-11@2x.png"
                />
              </div>
            </div>
            <img
              className="github-mark"
              alt="Github mark"
              src="https://generation-sessions.s3.amazonaws.com/c9991b567df7e3e77317c494bf64bda7/img/github-mark-1@2x.png"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};
