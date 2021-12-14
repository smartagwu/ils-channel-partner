import './App.css';
import ISWidget from "@smart_agwu/ils-js";
import Header from "./components/Header/Header";
import WidgetOptions from './model/widgetOptions';
import AppContent from './components/Content/AppContent';

var options:WidgetOptions = {
  token: "",
  email: "",
  customerId: "",
  firstName: "",
  lastName: "",
  countryCode: "",
  onClose: () => {},
  onFailed: (error) => {},
  onSuccessful: (loanId) => {}
};

function App() {

  function callISW() {
    ISWidget().buildWithOptions(options);
  }

  return (
    <div className="App">
      <Header callISW={callISW}/>
      <AppContent />
    </div>
  );
}

export default App;
