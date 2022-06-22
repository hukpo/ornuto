package expo.modules.quickimage

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class QuickImageModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("QuickImage")

    AsyncFunction("helloAsync") { options: Map<String, String> ->
      println("Hello 👋")
    }

    ViewManager {
      View { context -> 
        QuickImageView(context) 
      }

      Prop("name") { view: QuickImageView, prop: String ->
        println(prop)
      }
    }
  }
}
