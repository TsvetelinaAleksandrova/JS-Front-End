function attachEventsListeners() {
    const inputToMeters = {
        km: (unit) => unit * 1000,
        m: (unit) => unit * 1,
        cm: (unit) => unit * 0.01,
        mm: (unit) => unit * 0.001,
        mi: (unit) => unit * 1609.34,
        yrd: (unit) => unit * 0.9144,
        ft: (unit) => unit * 0.3048,
        in: (unit) => unit * 0.0254
    }

    let metersToOutput = {
        km: (unit) => unit / 1000,
        m: (unit) => unit / 1,
        cm: (unit) => unit / 0.01,
        mm: (unit) => unit / 0.001,
        mi: (unit) => unit / 1609.34,
        yrd: (unit) => unit / 0.9144,
        ft: (unit) => unit / 0.3048,
        in: (unit) => unit / 0.0254
    }

    const convertButtonElement = document.getElementById('convert');
    convertButtonElement.addEventListener('click', convertEvent);

    function convertEvent(event) {
        let inputDistanceElement = Number(document.getElementById('inputDistance').value);
        let inputUnitElement = document.getElementById('inputUnits').value;

        let quantityInMeters = inputToMeters[inputUnitElement](inputDistanceElement);

        let outputUnitElement = document.getElementById('outputUnits').value;
        let outputResult = metersToOutput[outputUnitElement](quantityInMeters);

        let outputDistanceElement = document.getElementById('outputDistance');
        outputDistanceElement.value = outputResult;
    }
}