import { Action } from "../actions/Action";
import { SetProjectAction } from "../actions/SetProjectAction";
import { SetProjectFavoriteAction } from "../actions/SetProjectFavoriteAction";
import { Project, ProjectManager } from "../project";
import { ProjectActionCommand } from "./ProjectActionCommand";

export class SetProjectFavoriteCommand extends ProjectActionCommand {

    constructor(private readonly projManager : ProjectManager){
        super('Set Project Favorite');
    }

    public shouldRun(projects: Project[] | undefined): boolean {
        return !!projects && projects.length > 0;
    }

    public async getActions(projects: Project[] | undefined): Promise<Action[]> {
        return [new SetProjectFavoriteAction(this.projManager, projects)];
    }

}