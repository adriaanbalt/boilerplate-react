/********************************************************************
 *                             .__   __                             *
 *                      _____  |  |_/  |_                           *
 *                      \__  \ |  |\   __\                          *
 *                       / __ \|  |_|  |                            *
 *                      (____  /____/__|                            *
 *                           \/                                     *
 *                                                                  *
 * Alt: Isomorphic Flux Implementation                              *
 * http://github.com/goatslacker/alt                                *
 ********************************************************************
 * alt.js: creates an Alt/Flux instance                             *
 *                                                                  *
 * Example Data Flow via alt:                                       *
 * view --> action --> dispatcher --> store --> view                *
 ********************************************************************
 * 1. React View                                                    *
 ********************************************************************
 * import VideoHero from '../components/VideoHero';                 *
 * ...                                                              *
 * this.updateContent (object) {                                    *
 *   ActionCreator.updateContent(object)                            *
 * },                                                               *
 * ...                                                              *
 * ...                                                              *
 * <VideoHero onClick={() => ActionCreator.updateContent } />       *
 ********************************************************************
 * 2. Action Creator (this file!)                                   *
 ********************************************************************
 * this.generateActions('updateContent', 'toggleEditingMode')       *
 *                                                                  *
 * export default alt.createActions(MyViewActions)                  *
 ********************************************************************
 * 3. Store                                                         *
 ********************************************************************
 * class AppStore {                                                 *
 *   constructor () {                                               *
 *     this.bindListeners({                                         *
 *       updateContent: ActionCreator.UPDATE_CONTENT,               *
 *       toggleEditMode: ActionCreator.TOGGLE_EDIT_MODE             *
 *     })                                                           *
 *   }                                                              *
 *   ...                                                            *
 *   updateContent(o) {                                             *
 *     this.data[o.field] = o.value                                 *
 *   }                                                              *
 * }                                                                *
 ********************************************************************/

import Alt from 'alt';
const alt = new Alt();
export default alt;
