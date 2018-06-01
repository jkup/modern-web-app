export function render(component, element) {
  element.innerHTML = component();
}