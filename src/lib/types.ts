interface Operator {
  category: string;
  aliases: Array<string>;
  description: string;
  compatibility: 'all' | 'dsp' | 'jitter';
}
