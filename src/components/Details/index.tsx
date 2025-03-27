import "./style.scss";

const Details = ({ theme }) => {
  return (
    <div className="details" style={{ color: theme.color }}>
      <div className="detailscontent">
        <div className="cards">
          <div>
            <p className="Text1">CURRENT TIME ZONE</p>
            <p className="Text2">GEORGIA</p>
          </div>
          <div>
            <p className="Text1">Day of the year</p>
            <p className="Text2">295</p>
          </div>
        </div>
        <div className="cards line">
          <div>
            <p className="Text1">Day of the week</p>
            <p className="Text2">5</p>
          </div>
          <div>
            <p className="Text1">Week number</p>
            <p className="Text2">42</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
