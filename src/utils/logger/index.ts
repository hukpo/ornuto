if (!__DEV__) {
  console.log = () => null;
  console.error = () => null;
}

export class Logger {
  private _logger = console;
  private _namespace: string;

  constructor(namespace: string) {
    this._namespace = `[${namespace}]`;
  }

  info(message: string) {
    this._logger.log(this._namespace, message);

    // TODO crashlytics
  }

  async event(name: string, params: object) {
    try {
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
