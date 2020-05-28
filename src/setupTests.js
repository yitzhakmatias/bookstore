import { configure as configureEnzyme } from 'enzyme'
import EnzymeReactAdapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
import 'mutationobserver-shim';
global.MutationObserver = window.MutationObserver;

configureEnzyme({ adapter: new EnzymeReactAdapter() })
