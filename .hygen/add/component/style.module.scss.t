---
to: "<%= !useStyleModule ? null : chooseOutPutDir === 'Layouts' ? `src/components/${chooseOutPutDir}/${Name}Layout/style.module.scss` : chooseOutPutDir === 'Managements' ? `src/components/${chooseOutPutDir}/${Name}Container/style.module.scss` : `src/components/${chooseOutPutDir}/${Name}/style.module.scss` %>"
sh: "<%= !useStyleModule ? null : chooseOutPutDir === 'Layouts' ? `stylelint --fix src/components/${chooseOutPutDir}/${Name}Layout/style.module.scss` : chooseOutPutDir === 'Managements' ? `stylelint --fix src/components/${chooseOutPutDir}/${Name}Container/style.module.scss` : `stylelint --fix src/components/${chooseOutPutDir}/${Name}/style.module.scss` %>"
---
@use "@/styles/mixins";

.wrapper {
  @include mixins.aboveLargeMobile {}
}
