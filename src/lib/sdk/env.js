import bridge from './cmlBridge';

/**
 * 判断是在ChameleonSDK中
 * @returns {boolean}
 */
export function inSDK() {
  return bridge.inSDK();
}
