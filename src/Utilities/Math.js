export function min(a, b) {
  return (a < b) ? a : b;
}

export function max(a, b) {
  return (a > b) ? a : b;
}

export function clamp(start, end, val) {
  return max(start, min(end, val));
}

export function clamp01(val) {
  return max(0, min(1, val));
}

export function getNormalized(start, end, val) {
  return (val - start) / (end - start);
}

export function getNormalizedClamp(start, end, val) {
  return clamp01((val - start) / (end - start));
}

export function lerp(start, end, t) {
  t = clamp01(t);
  return start * (1 - t) + end * t;
}

export function lerpUnclamped(start, end, t) {
  return start * (1 - t) + end * t;
}