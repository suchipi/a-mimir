declare const sleep: {
  sync: (milliseconds: number) => void;
  async: (milliseconds: number) => Promise<void>;
};

export { sleep };
