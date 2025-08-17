export const formatCLP = (value) => {
  try {
    return value.toLocaleString('es-CL');
  } catch {
    return String(value);
  }
};