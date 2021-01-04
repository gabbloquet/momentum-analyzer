import {useSelector} from "react-redux";
import {STRATEGY_TYPE} from "../../../store/strategy/strategySlice.service";
import DmaReportViewer from './DmaReportViewer'

const AnalyseViewer = () => {
  const strategy = useSelector(state => state.userStrategy.strategy)

  switch (strategy) {
    case STRATEGY_TYPE.DMA:
      return <DmaReportViewer />
    default:
      return <p>Statégie inconnue</p>
  }
}

export default AnalyseViewer;
