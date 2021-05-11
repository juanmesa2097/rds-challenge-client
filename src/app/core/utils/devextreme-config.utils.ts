import config from 'devextreme/core/config';
import dxDataGrid from 'devextreme/ui/data_grid';
import dxForm from 'devextreme/ui/form';
import dxLoadPanel from 'devextreme/ui/load_panel';
import dxNumberBox from 'devextreme/ui/number_box';

/**
 * Establece una configuración global para el ambiente y los controles de DevExtreme
 *
 */
export const DevExtremeGlobalConfiguration = {
  runGlobal: () => {
    config({
      defaultCurrency: 'COP',
      oDataFilterToLower: true,
      editorStylingMode: 'filled',
    });
  },
  runControls: () => {
    dxForm.defaultOptions({
      options: {
        labelLocation: 'top',
        optionalMark: '(opcional)',
        showOptionalMark: false,
      },
    });

    dxNumberBox.defaultOptions({
      options: {
        showSpinButtons: true,
      },
    });

    dxDataGrid.defaultOptions({
      options: {
        showBorders: false,
        columnHidingEnabled: true,
        columnAutoWidth: true,
        showRowLines: true,
        showColumnLines: false,
      },
    });

    dxLoadPanel.defaultOptions({
      options: {
        shadingColor: 'rgba(0,0,0,0.01)',
        showIndicator: true,
        showPane: true,
        shading: true,
        closeOnOutsideClick: false,
      },
    });
  },
};
