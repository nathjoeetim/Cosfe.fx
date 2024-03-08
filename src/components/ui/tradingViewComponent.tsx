import styled from "styled-components";

function TradingView() {
  return (
    <section>
      <TradingViewContainer className="tradingview-widget-container relative top-0 right-0 left-0 ">
        <div className="tradingview-widget-container__widget"></div>

        <script
          type="text/javascript"
          src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
          async
        ></script>
      </TradingViewContainer>
    </section>
  );
}

export default TradingView;

const TradingViewContainer = styled.div`
  padding: 0px 20px;
`;
