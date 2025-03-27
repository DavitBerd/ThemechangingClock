import { useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "../themes";
import "./style.scss";
import arrow from "../../imgs/Group 3.png";
import cicrlearrows from "../../imgs/Combined Shape.png";
import lightGreetingImg from "../../imgs/Combined Shape1.png";
import darkGreetingImg from "../../imgs/Path.png";
import Details from "../Details";
import { getTheme } from "../tools";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: ${(props) => props.theme.backgroundImage};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  :root {
    --details-bg: ${(props) =>
      props.theme === lightTheme
        ? "rgba(255, 255, 255, 0.5)"
        : "rgba(0, 0, 0, 0.5)"};
  }
`;

const MainBlock = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [theme, setTheme] = useState<"light" | "dark">(getTheme(new Date()));
  const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTheme(getTheme(new Date()));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleDetails = () => {
    setIsDetailsVisible((prev) => !prev);
  };

  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <div className="main-block">
        <div className={`main ${isDetailsVisible ? "details-visible" : ""}`}>
          {!isDetailsVisible && (
            <div className="quote">
              <div>
                <p className="P1">
                  “The science of operations, as derived from mathematics more
                  especially, is a science of itself, and has its own abstract
                  truth and value.”
                </p>
                <p className="P2">Ada Lovelace</p>
              </div>
              <div>
                <img src={cicrlearrows} alt="Circular Arrows" />
              </div>
            </div>
          )}
          <div className="time">
            <div className="flex">
              <div className="greeting">
                <img
                  src={theme === "light" ? lightGreetingImg : darkGreetingImg}
                  alt="Greeting Icon"
                />
                <p>GOOD MORNING, IT’S CURRENTLY</p>
              </div>
              <div className="clock">
                {currentTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
              <div className="location">In Georgia</div>
            </div>
            <div className="More">
              <button onClick={toggleDetails}>
                <p>{isDetailsVisible ? "LESS" : "MORE"}</p>
                <img
                  src={arrow}
                  alt="Arrow"
                  className={isDetailsVisible ? "rotated" : ""}
                />
              </button>
            </div>
          </div>
        </div>
        {isDetailsVisible && <Details theme={selectedTheme} />}
      </div>
    </ThemeProvider>
  );
};

export default MainBlock;
