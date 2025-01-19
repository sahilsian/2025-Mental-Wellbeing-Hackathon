//defining entry point for application
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import Provider from '../../../helpers/context/provider';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

registerRootComponent(Provider);
