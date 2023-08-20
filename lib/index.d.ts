import { GetObject } from './../types/asterisk';
import { UpdateObject } from './../types/asterisk';
import { DeleteObject } from './../types/asterisk';
import { GetInfo } from './../types/asterisk';
import { Ping } from './../types/asterisk';
import { ListModules } from './../types/asterisk';
import { GetModule } from './../types/asterisk';
import { LoadModule } from './../types/asterisk';
import { UnloadModule } from './../types/asterisk';
import { ReloadModule } from './../types/asterisk';
import { ListLogChannels } from './../types/asterisk';
import { AddLog } from './../types/asterisk';
import { DeleteLog } from './../types/asterisk';
import { RotateLog } from './../types/asterisk';
import { GetGlobalVar } from './../types/asterisk';
import { SetGlobalVar } from './../types/asterisk';
import { List } from './../types/endpoints';
import { SendMessage } from './../types/endpoints';
import { ListByTech } from './../types/endpoints';
import { Get } from './../types/endpoints';
import { SendMessageToEndpoint } from './../types/endpoints';
import { List as channelsList } from './../types/channels';
import { Originate } from './../types/channels';
import { Create } from './../types/channels';
import { Get as channelsGet } from './../types/channels';
import { OriginateWithId } from './../types/channels';
import { Hangup } from './../types/channels';
import { ContinueInDialplan } from './../types/channels';
import { Move } from './../types/channels';
import { Redirect } from './../types/channels';
import { Answer } from './../types/channels';
import { Ring } from './../types/channels';
import { RingStop } from './../types/channels';
import { SendDTMF } from './../types/channels';
import { Mute } from './../types/channels';
import { Unmute } from './../types/channels';
import { Hold } from './../types/channels';
import { Unhold } from './../types/channels';
import { StartMoh } from './../types/channels';
import { StopMoh } from './../types/channels';
import { StartSilence } from './../types/channels';
import { StopSilence } from './../types/channels';
import { Play } from './../types/channels';
import { PlayWithId } from './../types/channels';
import { Record } from './../types/channels';
import { GetChannelVar } from './../types/channels';
import { SetChannelVar } from './../types/channels';
import { SnoopChannel } from './../types/channels';
import { SnoopChannelWithId } from './../types/channels';
import { Dial } from './../types/channels';
import { Rtpstatistics } from './../types/channels';
import { ExternalMedia } from './../types/channels';
import { List as bridgesList } from './../types/bridges';
import { Create as bridgesCreate } from './../types/bridges';
import { CreateWithId } from './../types/bridges';
import { Get as bridgesGet } from './../types/bridges';
import { Destroy } from './../types/bridges';
import { AddChannel } from './../types/bridges';
import { RemoveChannel } from './../types/bridges';
import { SetVideoSource } from './../types/bridges';
import { ClearVideoSource } from './../types/bridges';
import { StartMoh as bridgesStartMoh } from './../types/bridges';
import { StopMoh as bridgesStopMoh } from './../types/bridges';
import { Play as bridgesPlay } from './../types/bridges';
import { PlayWithId as bridgesPlayWithId } from './../types/bridges';
import { Record as bridgesRecord } from './../types/bridges';
import { ListStored } from './../types/recordings';
import { GetStored } from './../types/recordings';
import { DeleteStored } from './../types/recordings';
import { GetStoredFile } from './../types/recordings';
import { CopyStored } from './../types/recordings';
import { GetLive } from './../types/recordings';
import { Cancel } from './../types/recordings';
import { Stop } from './../types/recordings';
import { Pause } from './../types/recordings';
import { Unpause } from './../types/recordings';
import { Mute as recordingsMute } from './../types/recordings';
import { Unmute as recordingsUnmute } from './../types/recordings';
import { List as soundsList } from './../types/sounds';
import { Get as soundsGet } from './../types/sounds';
import { Get as playbacksGet } from './../types/playbacks';
import { Stop as playbacksStop } from './../types/playbacks';
import { Control } from './../types/playbacks';
import { List as deviceStatesList } from './../types/deviceStates';
import { Get as deviceStatesGet } from './../types/deviceStates';
import { Update } from './../types/deviceStates';
import { Delete } from './../types/deviceStates';
import { List as mailboxesList } from './../types/mailboxes';
import { Get as mailboxesGet } from './../types/mailboxes';
import { Update as mailboxesUpdate } from './../types/mailboxes';
import { Delete as mailboxesDelete } from './../types/mailboxes';
import { EventWebsocket } from './../types/events';
import { UserEvent } from './../types/events';
import { List as applicationsList } from './../types/applications';
import { Get as applicationsGet } from './../types/applications';
import { Subscribe } from './../types/applications';
import { Unsubscribe } from './../types/applications';
import { Filter } from './../types/applications';

declare global {

	namespace asterisk {
		const getObject: typeof GetObject
		const updateObject: typeof UpdateObject
		const deleteObject: typeof DeleteObject
		const getInfo: typeof GetInfo
		const ping: typeof Ping
		const listModules: typeof ListModules
		const getModule: typeof GetModule
		const loadModule: typeof LoadModule
		const unloadModule: typeof UnloadModule
		const reloadModule: typeof ReloadModule
		const listLogChannels: typeof ListLogChannels
		const addLog: typeof AddLog
		const deleteLog: typeof DeleteLog
		const rotateLog: typeof RotateLog
		const getGlobalVar: typeof GetGlobalVar
		const setGlobalVar: typeof SetGlobalVar
	}
	namespace endpoints {
		const list: typeof List
		const sendMessage: typeof SendMessage
		const listByTech: typeof ListByTech
		const get: typeof Get
		const sendMessageToEndpoint: typeof SendMessageToEndpoint
	}
	namespace channels {
		const list: typeof channelsList
		const originate: typeof Originate
		const create: typeof Create
		const get: typeof channelsGet
		const originateWithId: typeof OriginateWithId
		const hangup: typeof Hangup
		const continueInDialplan: typeof ContinueInDialplan
		const move: typeof Move
		const redirect: typeof Redirect
		const answer: typeof Answer
		const ring: typeof Ring
		const ringStop: typeof RingStop
		const sendDTMF: typeof SendDTMF
		const mute: typeof Mute
		const unmute: typeof Unmute
		const hold: typeof Hold
		const unhold: typeof Unhold
		const startMoh: typeof StartMoh
		const stopMoh: typeof StopMoh
		const startSilence: typeof StartSilence
		const stopSilence: typeof StopSilence
		const play: typeof Play
		const playWithId: typeof PlayWithId
		const record: typeof Record
		const getChannelVar: typeof GetChannelVar
		const setChannelVar: typeof SetChannelVar
		const snoopChannel: typeof SnoopChannel
		const snoopChannelWithId: typeof SnoopChannelWithId
		const dial: typeof Dial
		const rtpstatistics: typeof Rtpstatistics
		const externalMedia: typeof ExternalMedia
	}
	namespace bridges {
		const list: typeof bridgesList
		const create: typeof bridgesCreate
		const createWithId: typeof CreateWithId
		const get: typeof bridgesGet
		const destroy: typeof Destroy
		const addChannel: typeof AddChannel
		const removeChannel: typeof RemoveChannel
		const setVideoSource: typeof SetVideoSource
		const clearVideoSource: typeof ClearVideoSource
		const startMoh: typeof bridgesStartMoh
		const stopMoh: typeof bridgesStopMoh
		const play: typeof bridgesPlay
		const playWithId: typeof bridgesPlayWithId
		const record: typeof bridgesRecord
	}
	namespace recordings {
		const listStored: typeof ListStored
		const getStored: typeof GetStored
		const deleteStored: typeof DeleteStored
		const getStoredFile: typeof GetStoredFile
		const copyStored: typeof CopyStored
		const getLive: typeof GetLive
		const cancel: typeof Cancel
		const stop: typeof Stop
		const pause: typeof Pause
		const unpause: typeof Unpause
		const mute: typeof recordingsMute
		const unmute: typeof recordingsUnmute
	}
	namespace sounds {
		const list: typeof soundsList
		const get: typeof soundsGet
	}
	namespace playbacks {
		const get: typeof playbacksGet
		const stop: typeof playbacksStop
		const control: typeof Control
	}
	namespace deviceStates {
		const list: typeof deviceStatesList
		const get: typeof deviceStatesGet
		const update: typeof Update
		const delete: typeof Delete
	}
	namespace mailboxes {
		const list: typeof mailboxesList
		const get: typeof mailboxesGet
		const update: typeof mailboxesUpdate
		const delete: typeof mailboxesDelete
	}
	namespace events {
		const eventWebsocket: typeof EventWebsocket
		const userEvent: typeof UserEvent
	}
	namespace applications {
		const list: typeof applicationsList
		const get: typeof applicationsGet
		const subscribe: typeof Subscribe
		const unsubscribe: typeof Unsubscribe
		const filter: typeof Filter

	}
}