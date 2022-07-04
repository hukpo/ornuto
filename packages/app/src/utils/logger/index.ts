if (!__DEV__) {
  console.log = () => null;
  console.error = () => null;
}

const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const millis = date.getMilliseconds();

  const fullHours = (hours < 10 ? '0' : '') + hours;
  const fullMinutes = (minutes < 10 ? '0' : '') + minutes;
  const fullMillis = (millis < 100 ? '0' : '') + (millis < 10 ? '0' : '') + millis;

  return `${fullHours}:${fullMinutes}.${fullMillis}`;
};

export class Logger {
  private _logger = console;
  private _namespace: string;

  constructor(namespace: string) {
    this._namespace = `[${namespace}]`;
  }

  info(message: string) {
    let fullMessage = `${this._namespace} ${message}`;

    if (__DEV__) {
      fullMessage = `${getCurrentTime()} - ${fullMessage}`;
    }

    this._logger.log(fullMessage);

    // TODO crashlytics
  }

  async event(name: string, params: object) {
    try {
      // TODO namespace
      this.info(`event: ${name}, params: ${JSON.stringify(params)}`);

      // TODO analytics
    } catch (err) {
      this.error(err);
    }
  }

  error(error: unknown) {
    if (error instanceof Error) {
      this._logger.error(this._namespace, error);

      // TODO crashlytics
    } else if (typeof error === 'string') {
      this.error(new Error(error));
    } else if (typeof error === 'object') {
      this.error(new Error(JSON.stringify(error)));
    } else {
      this._logger.error(error);
    }
  }
}
