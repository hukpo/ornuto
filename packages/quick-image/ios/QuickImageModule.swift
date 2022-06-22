import ExpoModulesCore

public class QuickImageModule: Module {
  public func definition() -> ModuleDefinition {
    Name("QuickImage")

    AsyncFunction("helloAsync") { (options: [String: String]) in
      print("Hello 👋")
    }

    ViewManager {
      View {
        QuickImageView()
      }

      Prop("name") { (view: QuickImageView, prop: String) in
        print(prop)
      }
    }
  }
}
