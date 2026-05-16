const calcular = () => {
const p = parseFloat(peso);
const a = parseFloat(altura) / 100; // cm → metros
if (p > 0 && a > 0) {
setResultado(Math.round((p / (a * a)) * 10) / 10);
}
};