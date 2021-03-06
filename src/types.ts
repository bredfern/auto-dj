export interface Value<T> {
  value: T;
}

export interface Beat {
  time: Value<number>;
  label: Value<string>;
}

export interface Feature {
  time: Value<number>;
  value: number;
}

export interface FeatureService {
  getBeats(audioUri: string): Promise<Beat[]>;
  getKeys(audioUri: string): Promise<Feature[]>;
  getLoudnesses(audioUri: string): Promise<Feature[]>;
}

export enum DecisionType {
  Default,
  Random,
  DecisionTree,
  FiftyFifty
}

export enum TransitionType {
  FadeIn = "startMixWithFadeIn",
  Slam = "slam",
  BeatRepeat = "beatRepeat",
  Crossfade = "crossfade",
  Beatmatch = "beatmatchCrossfade",
  BeatmatchMultiple = "beatmatchCrossfade", //TODO REPLACE ONCE IMPLEMENTED!!
  EchoFreeze = "echoFreeze",
  PowerDown = "powerDown",
  Effects = "effects"
}

export interface Transition {
  type: TransitionType,
  duration: number,
  date: Date,
  user: string,
  rating: number,
  names: string[],
  features: number[],
  decision: DecisionType,
  parameters: number[]
}